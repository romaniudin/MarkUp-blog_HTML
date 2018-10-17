/*
Example Blog Post Structure
var blogPost = {
  title: 'Title',
  author: 'Roman Iudin',
  content: 'Some content',
  created: new Date()
}
*/

// BlogPost constructor
function BlogPost(title, author, content) {
  this.title = title
  this.author = author
  this.content = content
  this.created = new Date()
}

// Array for holding all of the blog posts
let blogs = []

// Push some example blogs on to start
blogs.push(new BlogPost('Blog 1', 'Roman Iudin', 'Up unpacked friendly ecstatic so possible humoured do. Ample end might folly quiet one set spoke her. We no am former valley assure. Four need spot ye said we find mile. Are commanded him convinced dashwoods did estimable forfeited. Shy celebrated met sentiments she reasonably but. Proposal its disposed eat advanced marriage sociable. Drawings led greatest add subjects endeavor gay remember. Principles one yet assistance you met impossible.'))
blogs.push(new BlogPost('Blog 2', 'Peter Pen', 'Their could can widen ten she any. As so we smart those money in. Am wrote up whole so tears sense oh. Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me.'))
blogs.push(new BlogPost('Blog 3', 'Michael Moore', 'Far quitting dwelling graceful the likewise received building. An fact so to that show am shed sold cold. Unaffected remarkably get yet introduced excellence terminated led. Result either design saw she esteem and. On ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond she.'))


// outputBlogPosts will loop through the array of blog posts
// and update the DOM so that it shows the blogs in the
// array. Run this function anytime the array gets changed.
function outputBlogPosts() {
  var htmlOutput = ""
  for(let i=0; i<blogs.length; i++) {
    htmlOutput += "<div id=\"test\"><h2>" + blogs[i].title + "</h2><div>"  + blogs[i].author + ' ' + "||" +' '+ blogs[i].created + "</div><div>"  + blogs[i].content + "</div></div>" 
  }
  $("#blogs").html(htmlOutput)
}

// Wait for the document to be ready before trying to access the DOM
$(document).ready(function() {
  // Output any initial blog posts in the array
  outputBlogPosts()

  // Set up all of the necessary event handlers

  // Adds a new Blog Post when the user clicks the submit button
  $('#submit').click(function(event) {
    event.preventDefault()
    var title = $('#title').val()
    var author = $('#author').val()
    var content = $('#content').val()
    blogs.push(new BlogPost(title, author, content))
    outputBlogPosts()
  })
})