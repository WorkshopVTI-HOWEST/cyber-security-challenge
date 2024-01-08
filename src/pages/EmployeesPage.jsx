import Employee from "../components/Employee";

export default function SocialPage() {
    return (
        <>
            <h1>Employees</h1>
            <Employee
                name="Bert"
                description="Bert is the CEO, he loves swimming and his dog called 'Boomer'."
                imgURL="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
            />
            <Employee
                name="Anja"
                description="Anja is the secretary, she loves numbers."
                imgURL="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </>
    );
}
