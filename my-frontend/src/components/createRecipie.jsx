import axios from 'axios';
import React, { useState } from 'react'

export default function CreateRecipie() {
    const [author, setAuthor] = useState();
    const [title, setTitle] = useState();
    const [picture, setPicture] = useState();
    const [description, setDescription] = useState();
    const [ingredients, setIngredients] = useState();
    const [step, setStep] = useState();
    const [error, setError] = useState();

    async function hndlCreateRecipie(e) {
        e.preventDefault()
        axios.post('http://167.99.18.33:8000/register', {
            author: author,
            title: title,
            picture: picture,
            description: description,
            ingredients: ingredients,
            step: step
        })
            .then(
                async (response) => {
                    window.location.href = '/ShowAllRecipies';
                }, (error) => {
                    setError({ errorMessage: "The recipie exist!" });
                });
    }
    return (
        <>
            <div className="fromContainer">
                <div className="formWrapper">
                    <span className="title">Create New Recipie</span>
                    <form>
                        <input type="title" placeholder="Title"
                            name="title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }} />
                        <input type="pictureURL" placeholder="URL"
                            name="picture"
                            value={picture}
                            onChange={(e) => { setPicture(e.target.value) }} />
                        <input type="author" placeholder="Author"
                            name="author"
                            value={author}
                            onChange={(e) => { setAuthor(e.target.value) }} />
                        <input type="descriptions" placeholder="Descriptions"
                            name="descriptions"
                            value={picture}
                            onChange={(e) => { setDescription(e.target.value) }} />
                        <input type="ingredients" placeholder="Ingredients"
                            name="ingrediets"
                            value={ingredients}
                            onChange={(e) => { setIngredients(e.target.value) }} />
                        <input type="step" placeholder="Step"
                            name="step"
                            value={step}
                            onChange={(e) => { setStep(e.target.value) }} />
                        <button name="btn" onClick={(e) => { hndlCreateRecipie(e) }}>
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
