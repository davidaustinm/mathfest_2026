var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Chrissy Safranski Department of Mathematics Franciscan University of Steubenville CSafranski@franciscan.edu  David Austin Department of Mathematics Grand Valley State University austind@gvsu.edu  Matt Boelkins Department of Mathematics Grand Valley State University boelkinm@gvsu.edu       "
},
{
  "id": "chrissy",
  "level": "1",
  "url": "chrissy.html",
  "type": "Section",
  "number": "1",
  "title": "My First Section",
  "body": " My First Section   Some words    My First Subsection  Some more words  foo   A frog   A nice-looking frog with a longish description.    Bar:   "
},
{
  "id": "chrissy-subsection-4",
  "level": "2",
  "url": "chrissy.html#chrissy-subsection-4",
  "type": "Figure",
  "number": "1.1",
  "title": "",
  "body": " A frog   A nice-looking frog with a longish description.   "
},
{
  "id": "david",
  "level": "1",
  "url": "david.html",
  "type": "Section",
  "number": "2",
  "title": "My First Section",
  "body": " My First Section   Some words    My First Subsection  Some more words  foo   A frog   A nice-looking frog with a longish description.    Bar:   "
},
{
  "id": "david-subsection-4",
  "level": "2",
  "url": "david.html#david-subsection-4",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " A frog   A nice-looking frog with a longish description.   "
},
{
  "id": "matt",
  "level": "1",
  "url": "matt.html",
  "type": "Section",
  "number": "3",
  "title": "My First Section",
  "body": " My First Section   Some words    My First Subsection  Some more words  foo   A frog   A nice-looking frog with a longish description.    Bar:   "
},
{
  "id": "matt-subsection-4",
  "level": "2",
  "url": "matt.html#matt-subsection-4",
  "type": "Figure",
  "number": "3.1",
  "title": "",
  "body": " A frog   A nice-looking frog with a longish description.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
