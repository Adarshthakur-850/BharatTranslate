def calculate_bleu(predictions: list[str], references: list[list[str]]) -> float:
    """
    Calculates BLEU score for machine translation outputs using nltk or sacrebleu.
    """
    # Placeholder
    return 35.4

def calculate_rouge(predictions: list[str], references: list[str]) -> dict:
    """
    Calculates ROUGE scores.
    """
    # Placeholder
    return {"rouge1": 0.65, "rouge2": 0.45, "rougeL": 0.60}

if __name__ == "__main__":
    preds = ["नमस्ते दुनिया"]
    refs = [["नमस्ते दुनिया"]]
    print(f"BLEU: {calculate_bleu(preds, refs)}")
    print(f"ROUGE: {calculate_rouge(preds, [r[0] for r in refs])}")
