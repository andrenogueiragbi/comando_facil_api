import requests




while True:

    url = "https://commands-api.onrender.com/platforms"
    payload = ""
    response = requests.request("GET", url, data=payload)

    print(response.text)

    url = "https://commands-api.onrender.com/users/login"

    payload = {
        "email": "andrepereiragbi@gmail.com",
        "password": "090909.."
    }
    headers = {"Content-Type": "application/json"}

    response = requests.request("POST", url, json=payload, headers=headers)

    print(response.text)