import re


def clean_text(text):
    """
    Clean extracted document text.
    """

    text = re.sub(r"\s+", " ", text)

    text = re.sub(r"[^\w\s.,!?]", "", text)

    text = text.strip()

    return text