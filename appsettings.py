'''
Created on 06-Jan-2013

@author: hvishwanath
'''

class MyLibrary:
    myUserId = '115635621284467092412'
    myApiKey = 'AIzaSyB88fqZ8mHe6R3HPg7V8IcHPQ3TcjNWp-U'
    haveRead = '4'
    favorites = '0'
    reading = '3'
    toRead = '2'
    partlyRead = '1002'
    urlFormat = 'https://www.googleapis.com/books/v1/users/{userId}/bookshelves/{shelfId}/volumes?key={apiKey}&startIndex={startIndex}&maxResults={maxResults}'
    
    def __init__(self):
        pass
    
    def get_url(self, shelfId, startIndex, maxResults):
        return self.urlFormat.replace('{shelfId}',
                                      shelfId).replace('{userId}',
                                                       self.myUserId).replace('{apiKey}',
                                                                              self.myApiKey).replace('{startIndex}',
                                                                                                     startIndex).replace('{maxResults}', maxResults)
    def get_have_read_url(self, startIndex, maxResults):
        return self.get_url(self.haveRead, startIndex, maxResults)

if "__main__" == __name__:
    m = MyLibrary()
    print m.get_have_read_url('0', '40')