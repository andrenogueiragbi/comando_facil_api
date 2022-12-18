import requests

url = "http://10.0.0.15:5000/platforms"


while True:
    payload = ""
    response = requests.request("GET", url, data=payload)

    print(response.text)