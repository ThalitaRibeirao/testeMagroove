import requests as r
from bs4 import BeautifulSoup

'''         Magrove's Python Test       '''

# Goal: Learn to use the Python libraries requests and BeautifulSoup. Your script can be writen using python 2 or 3.

# Steps:
# 1. Create a Python script that gets the HTML source of this page: https://qz.com/africa/latest/ using the requests library.
# 2.  Your program must print the title and the link of all articles on the page
# You can follow this format : 
# 	Title: {article_title}
# 	Link: {article_link}\n

# Pro-tip: Article titles on that page are wrapped in 'h3' tags. The corresponding links are 'a' tags wrapping those 'h3' tags.


'''          My Python File       '''

# 1. Creating the scrip that gets the HTML
url = 'https://qz.com/africa/latest/'
request = r.get(url)

    # 1.1 If the script have some error, print the code of it
stt_code = request.status_code
if stt_code > 200:
    print(f'Had a Bad Request. Error code: {stt_code}')
    quit()

# 2. Looking for titles and links of articles
page = BeautifulSoup(request.text)

for article in page.find_all('a', {"class": "eBKpx"}):
    # 2.1 Get the article's link
    link = article['href']
    # 2.2 Get the article's title
    title = article.find('div', {'class': 'esSAQ _8S5gh'}).text  
    print(f"Title: {title}\nLink: {link}\n")
 