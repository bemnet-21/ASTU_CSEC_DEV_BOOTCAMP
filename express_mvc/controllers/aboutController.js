export const about = (req, res) => {
    res.status(200).json({ 
        message: "Successful",
        data: "Welcome to about page"
     })
}