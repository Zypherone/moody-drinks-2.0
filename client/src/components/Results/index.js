import React, { useState, useEffect, useContext } from "react";
import {
  useParams
} from "react-router-dom";
import { AuthContext } from "components/_Auth";

import app from 'components/_Firebase'
import API from 'utils/API'

import RecipeCard from 'components/RecipeDetails'

//import Book from 'components/Book'

/*
async function getRecipe (authToken, studentId) {
  try {
    let data = await Promise.all([
      getJobApplications(studentId),
      getAccountSettings(accountSettings),
      getProfileDetails(studentId)
    ]);

    // Implicitly wraps this return value in a promise
    return {
      apps: data[0],
      account: data[1],
      profile: data[2]
    }
  }

  catch (err) {
    // handle error
  }
}
*/


const Results = (props) => {

  const { pagename, recipeId } = useParams();
  const [results, setResults] = useState([])
  const { currentUser: user } = useContext(AuthContext)

  const getResults = () => {

    switch (pagename) {
      case 'after-work':
        API.getByType('vodka')
        .then((results) => {
          setResults(results.data.results)
        })
        break;
      case 'blue':
        API.getByType('gin')
        .then((results) => {
          setResults(results.data.results)
        })
        break;  
      case 'party':
        API.getByType('tequila')
        .then((results) => {
          setResults(results.data.results)
        })
        break;
      case 'easy':
        API.getByType('rum')
        .then((results) => {
          setResults(results.data.results)
        })
        break;
      case 'safe':
        API.getByType('mocktails')
        .then((results) => {
          setResults(results.data.results)
        })
        break;
      case 'surprise':
        API.getRandom()
        .then((results) => {
          setResults(results.data.results)
        })
        break;
      case 'favs':

        const db = app.database().ref().child('v/2/favs/' + user.uid)
        db.once('value').then(function(snapshot) {
          let res = snapshot.val()
          let results = Object.values(res).map((recipe) => {
            return recipe
          })
          setResults(results)
        })

        break;
    }

  }

  useEffect(() => {

    getResults()

  }, [])

  return (
    <>
      {(results.length !== 0) ? (
        results.map((recipe) => {
          return (
            <RecipeCard key={recipe.id.toString()} recipe={recipe} /> 
          )
        })
      ) : (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      )}
    </>
    // <Container as="Main">
    //   <h2>Search Results</h2>
    //   {(props.results.length !== 0) ? (
    //     props.results.map((book) => {
    //       return (
    //         <Book
    //           key={book.id}
    //           id={book.id}
    //           image={book.image}
    //           title={book.title}
    //           author={book.authors}
    //           description={book.description}
    //           link={book.link}
    //           saveBook={props.saveBook}
    //         />
    //       )
    //     })
    //   ) : (
    //     <p>No Results</p>
    //   )}
    // </Container>
  );
};

export default Results;