
const AddTopic = ()=>{
    return (
        <form >
            <label htmlFor="topicSlug">
               Topic Slug: <input type='text'
               placeholder="keyboards"
               id='topicSlug'
               required
               />
            </label>
            <label htmlFor="topicDesc">
            Topic Description: <input type='text'
               placeholder="mechanical keyboards > everything else"
               id='topicDesc'
               required
               />
            </label>
        </form>
    )
}

export default AddTopic