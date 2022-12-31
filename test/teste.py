import requests
from termcolor import colored





while True:

    url = "https://commands-front.onrender.com/"
    payload = ""
    responseRander = requests.request("GET", url, data=payload)
    print(colored(f'render: {responseRander.status_code}','red' if responseRander.status_code != 200 else 'green'))

    