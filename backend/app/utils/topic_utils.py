from app.models.ai_models import nlp


def generate_topic_title(keywords):
    """
    Generate a clean topic title from extracted keywords.
    """

    for keyword in keywords:

        doc = nlp(keyword)

        nouns = [
            token.text.title()
            for token in doc
            if token.pos_ in ["NOUN", "PROPN"]
        ]

        if nouns:
            return " ".join(nouns)

    return "General Topic"