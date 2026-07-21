from nltk.tokenize import sent_tokenize
from sklearn.cluster import KMeans

from app.models.ai_models import embedding_model, keyword_model


def extract_topics(text):
    """
    Extract topics from a single document using:
    1. Sentence embeddings
    2. KMeans clustering
    3. KeyBERT keyword extraction
    """

    # Split document into sentences
    sentences = sent_tokenize(text)

    if len(sentences) < 2:
        return []

    # Generate sentence embeddings
    embeddings = embedding_model.encode(sentences)

    # Decide number of clusters automatically
    if len(sentences) <= 5:
        n_clusters = 2
    elif len(sentences) <= 10:
        n_clusters = 3
    elif len(sentences) <= 20:
        n_clusters = 4
    else:
        n_clusters = 5

    # Never create more clusters than sentences
    n_clusters = min(n_clusters, len(sentences))

    # Cluster sentences
    kmeans = KMeans(
        n_clusters=n_clusters,
        random_state=42,
        n_init=10
    )

    labels = kmeans.fit_predict(embeddings)

    topics = []

    for cluster in range(n_clusters):

        # Collect sentences for this cluster
        cluster_sentences = [
            sentences[i]
            for i in range(len(sentences))
            if labels[i] == cluster
        ]

        if not cluster_sentences:
            continue

        cluster_text = " ".join(cluster_sentences)

        # Extract keywords
        keywords = keyword_model.extract_keywords(
            cluster_text,
            keyphrase_ngram_range=(1, 2),
            stop_words="english",
            top_n=5
        )

        keyword_list = [k for k, score in keywords]

        # Use first keyword as title (simple and stable)
        title = keyword_list[0].title() if keyword_list else f"Topic {cluster + 1}"

        # Return only top 3 representative sentences
        representative_sentences = cluster_sentences[:3]

        topics.append({
            "title": title,
            "keywords": keyword_list,
            "representative_sentences": representative_sentences
        })

    return topics