import axios from 'axios'
const baseUrl = '/api/workout'

const getWorkouts = async () => {
    const response = await axios.get(baseUrl)
    return response.data;
}

const getWorkout = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const createWorkout = async (newWorkout) => {
    const response = await axios.post(baseUrl, newWorkout)
    return response.data
}

const addExercise = async (id, newExercise) => {
    const response = await axios.post(`${baseUrl}/addexercise/${id}`, newExercise)
    return response.data
}

const removeExercise = async (id , object) => {
    await axios.post(`${baseUrl}/removeexercise/${id}`, object)
}

const addSet = async (id, object) => {
    const response = await axios.post(`${baseUrl}/addset/${id}`, object)
    return response.data
}

const removeSet = async (id, object) => {
    await axios.post(`${baseUrl}/removeset/${id}`, object)
}

const cancelWorkout = async (id) => {
    await axios.delete(`${baseUrl}/${id}`) 
}

const Save = async (id, object) => {
    const response = await axios.post(`${baseUrl}/${id}`, object)
    return response.data
}

const getWorkoutFacts = async (id) => {
    const response = await axios.get(`${baseUrl}/facts/${id}`)
    return response.data
}

const trainAgain = async (id) => {
    const response = await axios.post(`${baseUrl}/again/${id}`)
    return response.data
}

export default {
    getWorkouts, 
    getWorkout,
    createWorkout, 
    addExercise, 
    addSet, 
    removeSet, 
    removeExercise, 
    cancelWorkout,
    Save, 
    getWorkoutFacts, 
    trainAgain
}