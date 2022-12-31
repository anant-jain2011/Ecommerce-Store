export default function handler(req, res) {
    res.status(200).json({
        pincodes: {
            "249401": ["Haridwar", "UTTARAKHAND"],
            "249402": ["Haridwar", "UTTARAKHAND"],
            "249407": ["Haridwar", "UTTARAKHAND"],
            "249408": ["Haridwar", "UTTARAKHAND"]
        }
    })
}