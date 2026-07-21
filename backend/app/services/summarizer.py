from app.models.ai_models import summarizer_model


def generate_summary(text):
    text = text[:1024]

    if len(text.split()) < 40:
        return text

    summary = summarizer_model(
        text,
        max_length=100,
        min_length=20,
        do_sample=False
    )

    return summary[0]["summary_text"]