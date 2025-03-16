export default function Page() {

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <p>Landing page</p>
                <a href="/login">Login</a>
                <br></br>
                <a href="/signup">Signup</a>
            </div>
        </div>
    );
}
