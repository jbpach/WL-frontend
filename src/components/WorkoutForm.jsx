import Button from './Button'
import { FaCheck, FaXmark, FaPlus, FaTrash } from "react-icons/fa6";

const WorkoutForm = ({workout, setView, addSet, removeSet, removeExercise, handleWeightChange, handleRepChange, cancelWorkout, save }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className='w-full h-auto p-2 rounded-xl flex flex-col gap-2'>
            {workout.exercises.map((exercise) => (
                <div key={exercise._id} className='w-full h-auto bg-[#222739] p-2 rounded-xl'>
                    <div className='flex items-center justify-between mb-2'>
                        <h2 className='text-white'>{exercise.title}</h2>
                        <FaTrash className='text-[#F3766F]' onClick={() => removeExercise(exercise._id)}/>
                    </div>
                    <div className=' flex flex-col gap-1 text-white mb-2'>
                        {exercise.sets.map((set, index) => (
                            <div key={set._id}>
                                <div className='flex items-center justify-between w-full'>
                                    {index + 1}
                                    <label><input type='number' className='w-[125px] bg-inherit text-right' value={set.weight} onChange={(e) => handleWeightChange(e, exercise._id, set._id)}/> lbs</label>
                                    <label><input type='number' className='w-[125px] bg-inherit text-right' value={set.reps} onChange={(e) => handleRepChange(e, exercise._id, set._id)} /> reps</label>
                                    <FaTrash className='text-[#F3766F]' onClick={() => removeSet(exercise._id, set._id)}/>
                                </div>
                                <hr/>
                            </div>
                        ))}
                        <Button type='button' clickHandler={() => addSet(exercise._id)} icon={<FaPlus/>} label={'Set'}/>
                    </div>
                </div>
            ))}         
            <Button type='button' clickHandler={() => setView()} icon={<FaPlus />} label='Exercise'/>  
            <br />
            <Button type='submit' clickHandler={(e) => save(e)} icon={<FaCheck />} label='Save workout'/>
            <Button type='button' clickHandler={() => cancelWorkout()} icon={<FaXmark />} label='Cancel Workout' />
        </form>
    )
}

export default WorkoutForm