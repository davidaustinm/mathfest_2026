var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "rich_questions-2",
  "level": "1",
  "url": "rich_questions-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Chrissy Safranski Department of Mathematics Franciscan University of Steubenville CSafranski@franciscan.edu  David Austin Department of Mathematics Grand Valley State University austind@gvsu.edu  Matt Boelkins Department of Mathematics Grand Valley State University boelkinm@gvsu.edu        https:\/\/gvsu.edu\/s\/3JX      "
},
{
  "id": "introduction",
  "level": "1",
  "url": "introduction.html",
  "type": "Section",
  "number": "1",
  "title": "Introduction and Welcome",
  "body": " Introduction and Welcome   We're delighted that you've joined us to discuss rich questions : we want to consider what characterizes rich questions and think together about how to write rich questions for our students.  To begin, please take a few moments and introduce yourself to peers at your table: your name, institution\/location, and one class you teach where you regularly think about asking rich questions.   "
},
{
  "id": "prompt-1",
  "level": "1",
  "url": "prompt-1.html",
  "type": "Section",
  "number": "2",
  "title": "Activity",
  "body": " Activity  Choose one of the three sets of questions -- (discrete math), (linear algebra), or (calculus). For the set you choose, strive to work with 1-2 peers and to engage with the student experience of responding to the questions. As you do so, think about at least one of the following meta-questions:    What might students find helpful and useful ?     What aspects engage student thinking ?     What might students find frustrating ?     "
},
{
  "id": "chrissy",
  "level": "1",
  "url": "chrissy.html",
  "type": "Section",
  "number": "3",
  "title": "Exploring Relations",
  "body": " Exploring Relations   This is from Discrete Mathematics: An Open Introduction, 4th Edition by Oscar Levin.     After completing this section, you should be able to do the following.     Explain the relationship between a graph and a relation.    Determine whether a relation is reflexive, symmetric, or transitive.    Use an equivalence relation to partition a set and use a partition to define an equivalence relation.      Section Preview    Consider the three spinners below.    Three spinners    p1=(2.5,2.5)  p2=(7.5,2.5)  p3=(12.5,2.5)                \\huge{2}  \\huge{4}  \\huge{9}  \\Large{A}      \\huge{1}  \\huge{6}  \\huge{8}  \\Large{B}      \\huge{3}  \\huge{5}  \\huge{7}  \\Large{C}      If you and a friend each pick a different spinner and spin them, we can consider the nine possible outcomes. For example, between spinners and , the outcomes are . This suggests that spinner will win five out of nine times.  Compare the other combinations of spinners. Which spinner is best?    In this section, we will explore a generalization of a graph, called a relation . We will see how a relation can be represented by a graph and how a graph can be used to represent a relation. We will also consider some properties that a relation might have, and how these properties can be used to classify relations into different types.   Preview Activity   In a given month, some days are more similar than others. For example, the 3rd of the month is more like the 24th than it is like the 15th. What does this possibly mean? We will explore two ways in which this is true.      We will say that two numbers between 1 and 31 are related, written if their difference is a multiple of 7. So for example, since but since which is not a multiple of 7.    Which of the following are true? That is, which of the following pairs of numbers are related as we have defined above?                                    Which of the following statements are true about the relation in this case?    for every number    for any number    For any numbers and , if , then    For any numbers and , if and , then    For any numbers and , if and , then            We will write for the set of all numbers related to For example, Find each of the following:     ;     ;     ;     ;     ;     .    Are there any numbers that are in more than one of the sets above?  Yes   No                                               When you divide a multiple of 7 by 7, you get a whole number. If you divide another number by 7, you can either write the result as a decimal or as a quotient and a remainder. For example, is with a remainder of 5, since we can write . The remainder is also called the modulus . When programming in python (and many other languages), the modulus operator is written as % . For example, 19 % 7 is 5 . Try this out for a few numbers.   a = 19 print(a % 7)       Find all the numbers between 1 and 31 that are That is, find all such that a % 7 = 5 .          Since the modulus is a function, each number has exactly one modulus when divided by 7. This means that the moduli partition the numbers from 1 to 31: every number belongs to exactly one of the sets of numbers with a particular modulus. We have already found the set for modulus 5. Find the other sets.    a % 7 = 0 : ;    a % 7 = 1 : ;    a % 7 = 2 : ;    a % 7 = 3 : ;    a % 7 = 4 : ;    a % 7 = 6 : .                                     We can use the moduli to define a relation on the numbers from 1 to 31. We will say that if a % 7 = b % 7 . In other words, two numbers are related if they belong to the same set of the partition we found above.  Which of the following are true? That is, which of the following pairs of numbers are related by this modulus relation?                                          "
},
{
  "id": "chrissy-3",
  "level": "2",
  "url": "chrissy.html#chrissy-3",
  "type": "Objectives",
  "number": "3",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Explain the relationship between a graph and a relation.    Determine whether a relation is reflexive, symmetric, or transitive.    Use an equivalence relation to partition a set and use a partition to define an equivalence relation.    "
},
{
  "id": "gt-relations-section-previw-2",
  "level": "2",
  "url": "chrissy.html#gt-relations-section-previw-2",
  "type": "Investigate!",
  "number": "3.1",
  "title": "",
  "body": "  Consider the three spinners below.    Three spinners    p1=(2.5,2.5)  p2=(7.5,2.5)  p3=(12.5,2.5)                \\huge{2}  \\huge{4}  \\huge{9}  \\Large{A}      \\huge{1}  \\huge{6}  \\huge{8}  \\Large{B}      \\huge{3}  \\huge{5}  \\huge{7}  \\Large{C}      If you and a friend each pick a different spinner and spin them, we can consider the nine possible outcomes. For example, between spinners and , the outcomes are . This suggests that spinner will win five out of nine times.  Compare the other combinations of spinners. Which spinner is best?   "
},
{
  "id": "gt-relations-section-previw-3",
  "level": "2",
  "url": "chrissy.html#gt-relations-section-previw-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relation "
},
{
  "id": "pa-gt-relations-1",
  "level": "2",
  "url": "chrissy.html#pa-gt-relations-1",
  "type": "Worksheet Exercise",
  "number": "3.1.1",
  "title": "",
  "body": "   We will say that two numbers between 1 and 31 are related, written if their difference is a multiple of 7. So for example, since but since which is not a multiple of 7.    Which of the following are true? That is, which of the following pairs of numbers are related as we have defined above?                                    Which of the following statements are true about the relation in this case?    for every number    for any number    For any numbers and , if , then    For any numbers and , if and , then    For any numbers and , if and , then            We will write for the set of all numbers related to For example, Find each of the following:     ;     ;     ;     ;     ;     .    Are there any numbers that are in more than one of the sets above?  Yes   No                                            "
},
{
  "id": "pa-gt-relations-2",
  "level": "2",
  "url": "chrissy.html#pa-gt-relations-2",
  "type": "Worksheet Exercise",
  "number": "3.1.2",
  "title": "",
  "body": "  When you divide a multiple of 7 by 7, you get a whole number. If you divide another number by 7, you can either write the result as a decimal or as a quotient and a remainder. For example, is with a remainder of 5, since we can write . The remainder is also called the modulus . When programming in python (and many other languages), the modulus operator is written as % . For example, 19 % 7 is 5 . Try this out for a few numbers.   a = 19 print(a % 7)       Find all the numbers between 1 and 31 that are That is, find all such that a % 7 = 5 .          Since the modulus is a function, each number has exactly one modulus when divided by 7. This means that the moduli partition the numbers from 1 to 31: every number belongs to exactly one of the sets of numbers with a particular modulus. We have already found the set for modulus 5. Find the other sets.    a % 7 = 0 : ;    a % 7 = 1 : ;    a % 7 = 2 : ;    a % 7 = 3 : ;    a % 7 = 4 : ;    a % 7 = 6 : .                                     We can use the moduli to define a relation on the numbers from 1 to 31. We will say that if a % 7 = b % 7 . In other words, two numbers are related if they belong to the same set of the partition we found above.  Which of the following are true? That is, which of the following pairs of numbers are related by this modulus relation?                                       "
},
{
  "id": "linear-combs",
  "level": "1",
  "url": "linear-combs.html",
  "type": "Section",
  "number": "4",
  "title": "Linear independence",
  "body": " Linear independence   A version of this activity appears in Understanding Linear Algebra by David Austin.      Strengthen the connection between questions about linear combinations and questions about the consistency of linear systems.    Develop a geometric condition that explains when the span of a set of vectors is the same as the span of a proper subsect of those vectors.    Determine how the reduced row echelon form of a matrix explains when the span of the columns is the same as the span of a proper subset of those columns.      Some background  At this point of the course, students have encountered linear combinations of vectors and the concept of the span of a set of vectors. As a reminder, an example of a linear combination of vectors and is . Asking whether a given vector is a linear combination of a set of vectors is the same as asking about the consistency of an associated linear system.  Also, the span of a set of vectors is the set of all linear combinations that can be formed from the vectors.  The next activity provides a Sage cell as a way for students to explore. For thos unfamiliar with Sage, some background is provided below.   Sage background  Given vectors and , we can ask whether is a linear combination of these vectors by constructing the augmented matrix and finding its reduced row echelon form, such as , which tells us that . Sage can perform the row reduction as follows:      Introduction to linear independence    We will begin by exploring the span of two sets of vectors using the following Sage cell.      Consider the set of vectors . Is it possible to write the vector as a linear combination of these vectors? If so, how can it be written as a linear combination?  How about the vector ?      Express these results by writing a sentence or two using the concept of span .      Find the reduced row echelon form of the matrix whose columns are , , and : . What does this tell us about the span of the set of these vectors; in particular, is every vector in in the span of this set of vectors?      We now consider the set of vectors . Is it possible to write the vector as a linear combination of these vectors? If so, how can it be written as a linear combination?  How about the vector ?      Find the reduced row echelon form of the matrix whose columns are , , and : . What does this tell us about the span of the set of these vectors; in particular, is every vector in in the span of this set of vectors?      We have now considered two sets of three vectors in . In one case, the span is and in the other case, it is not. We would like to understand the difference in these two examples.  Are you able to write as a linear combination of and . How does the reduced row echelon form of help us answer this question?  Are you able to write as a linear combination of and . How does the reduced row echelon form of help us answer this question?      Explain why a linear combination of the vectors , , and can be rewritten as a linear combination of and alone.      Explain why .      "
},
{
  "id": "linear-combs-3",
  "level": "2",
  "url": "linear-combs.html#linear-combs-3",
  "type": "Objectives",
  "number": "4",
  "title": "",
  "body": "   Strengthen the connection between questions about linear combinations and questions about the consistency of linear systems.    Develop a geometric condition that explains when the span of a set of vectors is the same as the span of a proper subsect of those vectors.    Determine how the reduced row echelon form of a matrix explains when the span of the columns is the same as the span of a proper subset of those columns.    "
},
{
  "id": "linear-comb-subsection-3",
  "level": "2",
  "url": "linear-combs.html#linear-comb-subsection-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "span "
},
{
  "id": "linear-comb-subsection-5",
  "level": "2",
  "url": "linear-combs.html#linear-comb-subsection-5",
  "type": "Some background",
  "number": "4.1.1",
  "title": "Sage background.",
  "body": " Sage background  Given vectors and , we can ask whether is a linear combination of these vectors by constructing the augmented matrix and finding its reduced row echelon form, such as , which tells us that . Sage can perform the row reduction as follows:   "
},
{
  "id": "linear-combs-5-2",
  "level": "2",
  "url": "linear-combs.html#linear-combs-5-2",
  "type": "Activity",
  "number": "4.1",
  "title": "",
  "body": "  We will begin by exploring the span of two sets of vectors using the following Sage cell.      Consider the set of vectors . Is it possible to write the vector as a linear combination of these vectors? If so, how can it be written as a linear combination?  How about the vector ?      Express these results by writing a sentence or two using the concept of span .      Find the reduced row echelon form of the matrix whose columns are , , and : . What does this tell us about the span of the set of these vectors; in particular, is every vector in in the span of this set of vectors?      We now consider the set of vectors . Is it possible to write the vector as a linear combination of these vectors? If so, how can it be written as a linear combination?  How about the vector ?      Find the reduced row echelon form of the matrix whose columns are , , and : . What does this tell us about the span of the set of these vectors; in particular, is every vector in in the span of this set of vectors?      We have now considered two sets of three vectors in . In one case, the span is and in the other case, it is not. We would like to understand the difference in these two examples.  Are you able to write as a linear combination of and . How does the reduced row echelon form of help us answer this question?  Are you able to write as a linear combination of and . How does the reduced row echelon form of help us answer this question?      Explain why a linear combination of the vectors , , and can be rewritten as a linear combination of and alone.      Explain why .    "
},
{
  "id": "matt",
  "level": "1",
  "url": "matt.html",
  "type": "Section",
  "number": "5",
  "title": "The tangent line approximation",
  "body": " The tangent line approximation   The exercises that follow here are a subset of those found in Section 1.8 of the Doenet version of Active Calculus .    Using the tangent line approximation given a graph of and    Using a tangent line to approximate values of when given a graph for     "
},
{
  "id": "ez-1-8-doenet-2",
  "level": "2",
  "url": "matt.html#ez-1-8-doenet-2",
  "type": "Exercise",
  "number": "5.1",
  "title": "Using the tangent line approximation given a graph of <span class=\"process-math\">\\(f\\)<\/span> and <span class=\"process-math\">\\(L\\)<\/span>.",
  "body": "Using the tangent line approximation given a graph of and   "
},
{
  "id": "ez-1-8-doenet-1",
  "level": "2",
  "url": "matt.html#ez-1-8-doenet-1",
  "type": "Exercise",
  "number": "5.2",
  "title": "Using a tangent line to approximate values of <span class=\"process-math\">\\(g\\)<\/span> when given a graph for <span class=\"process-math\">\\(g'\\)<\/span>.",
  "body": "Using a tangent line to approximate values of when given a graph for   "
},
{
  "id": "prompt-2",
  "level": "1",
  "url": "prompt-2.html",
  "type": "Section",
  "number": "6",
  "title": "Discussion",
  "body": " Discussion  What are some characteristics of rich questions? How do these characteristics contribute to a rich learning experience for students?  Let's collect our shared ideas in this Google doc: .  "
},
{
  "id": "resources",
  "level": "1",
  "url": "resources.html",
  "type": "Section",
  "number": "7",
  "title": "Resources",
  "body": " Resources   Following are some resources that offer collections of rich questions or ideas for how to develop them yourself.    Links to resources      PRIMUS article by Su Doree: Turning Routine Exercises Into Activities that Teach Inquiry: A Practical Guide     Discrete Mathematics textbook: Discrete Mathematics: an open introduction     Linear Algebra textbook: Understanding Linear Algebra     Calculus textbook: Active Calculus Single Variable (Doenet version)     IOLA: Inquiry-Oriented Linear Algebra     Academy of Inquiry-Based Learning: AIBL blog playlist       "
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
