def save_patient(patient):
    required_keys = {
        "Year",
        "Month",
        "Make",
        "Quantity",
        "Pct"
    }

    if not all(key in patient for key in required_keys):
        return None

    new_patient = {
        "Year": patient["Year"],
        "Month": patient["Month"],
        "Make": patient["Make"],
        "Quantity": patient["Quantity"],
        "Pct": patient["Pct"]
    }

    return new_patient