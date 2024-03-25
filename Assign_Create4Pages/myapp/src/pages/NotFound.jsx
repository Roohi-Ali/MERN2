import myimg from './notfound.jpg'

function NotFound() {
    return (
        <>
        <h1> Page not Found</h1>
        <img src={myimg} alt="Page Not Found" />
        </>
    )
}

export default NotFound;