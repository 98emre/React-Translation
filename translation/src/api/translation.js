import { createHeaders } from "./headerHelper";

const apiURL = process.env.REACT_APP_API_URL;


export const addTranslation = async (user, translation) => {
    try {
        
        const response = await fetch(`${apiURL}/${user.id}`,{
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                username: user.username,
                translations: [...user.translations, translation]
            })
        })


        if(!response.ok) throw new Error("Could not update the translation")
        
        const result = await response.json()
        return [null, result]
    } catch (error) {
        return [error.message,null]
    }
}

export const translationClearHistory = async (userId) => {
    try {
        const response = await fetch(`${apiURL}/${userId}`,{
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })

        if(!response.ok){
            throw new Error("Could note update translations")
        }

        const result = await response.json()
        return [null,result];

    } catch (error) {
        return [error.message,null]
    }
}

