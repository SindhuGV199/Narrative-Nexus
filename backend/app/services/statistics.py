import math
import re


def document_statistics(text):

    words = text.split()

    word_count = len(words)

    character_count = len(text)

    sentence_count = len(re.findall(r"[.!?]", text))

    reading_time = math.ceil(word_count / 200)

    return {

        "word_count": word_count,

        "character_count": character_count,

        "sentence_count": sentence_count,

        "reading_time": reading_time

    }