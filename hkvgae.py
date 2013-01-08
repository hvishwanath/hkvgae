from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
import urllib2
import json
import jinja2
import os

jinjaEnvironment = jinja2.Environment(
                                      loader = jinja2.FileSystemLoader(os.path.dirname(__file__)))

class MainPage(webapp.RequestHandler):
    
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        url = 'https://www.googleapis.com/books/v1/users/115635621284467092412/bookshelves/4/volumes?key=AIzaSyB88fqZ8mHe6R3HPg7V8IcHPQ3TcjNWp-U'
        
        #Try to make a rest call
        totalItems = -1
        u = urllib2.urlopen(url)
        if u.code == 200:
            d = json.load(u)
            totalItems = d['totalItems']
        
        templateValues = {'totalItems' : totalItems,
                          'pageid' : 'about'
                          }
        
        template = jinjaEnvironment.get_template('index.html')

        self.response.out.write(template.render(templateValues))

class BlogPage(webapp.RequestHandler):
    
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        templateValues = {
                          'pageid' : 'blog'
                          }
        
        template = jinjaEnvironment.get_template('blog.html')

        self.response.out.write(template.render(templateValues))


class PulsePage(webapp.RequestHandler):
    
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        templateValues = {
                          'pageid' : 'pulse'
                          }
        
        template = jinjaEnvironment.get_template('pulse.html')

        self.response.out.write(template.render(templateValues))


class CVPage(webapp.RequestHandler):
    
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        templateValues = {
                          'pageid' : 'cv'
                          }
        
        template = jinjaEnvironment.get_template('cv.html')

        self.response.out.write(template.render(templateValues))


application = webapp.WSGIApplication([('/', MainPage),
                                      ('/pulse', PulsePage),
                                      ('/blog', BlogPage),
                                      ('/cv', CVPage),
                                      ], debug=True)


def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()
