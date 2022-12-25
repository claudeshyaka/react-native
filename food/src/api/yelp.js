import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer J487hErbVbt1dO9Id5EesaFsHE0s7bbcwm8JkO0K0Wb8DUtaZDRrK5vwTPNNoG8_c41d2Fv2uMKkoDmZMq1dT4lmLOOVCWMrFXc28uj384Nbi_62PCIdp-0wFlYPYnYx"
    },
});