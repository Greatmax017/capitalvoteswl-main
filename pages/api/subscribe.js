import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});
export default async function handler(req, res){
    const { email } = JSON.parse(req.body);

    if (!email){
        return res.status(400).json(
            { error: "Email is required "}
        );
    }

    try {
        await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: "pending",
            tags: ["waitlist"],
        });
        return res.status(201).json({ error: ""});
    } catch(error){
        console.log(error);
        return res.status(error.status).json({ error: "Bad Request" });
    }
}