def save_patient(patient):
    required_keys = {
        "Year",
        "Make",
        "Quantity",
        "Pct"
    }

    new_patient = {}
    for k in required_keys:
        new_patient[k] = patient[k]

    return new_patient