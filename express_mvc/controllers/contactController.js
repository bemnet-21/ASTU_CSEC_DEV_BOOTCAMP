export const addContact = (req, res) => {
    const { phone } = req.body
    if(!phone) return res.status(400).json({ message : "Missing Field" })

    try {
        res.status(201).json({
            message : "successful",
            data: phone
        })

    } catch(err) {
        console.log("Error: ", err)
        return res.status(500).json({ message : "Internal server error" })
    }
}