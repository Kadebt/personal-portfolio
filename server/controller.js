
module.exports = {
    getProjects: async (req, res) => {
        const db = req.app.get('db')
        
        const projects = await db.get_projects()

        res.status(200).send(projects)
    },
    getPresentation: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        const presentation = await db.get_presentation(id)

        res.status(200).send(presentation)
    }
}