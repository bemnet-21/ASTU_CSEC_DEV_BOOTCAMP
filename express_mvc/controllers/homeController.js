export const welcome = (req, res) => {

    const date = new Date.now()
    res.status(200).json({
        message: "Succesful",
        data: {
            message: "Welcome",
            date
        }
    })
}