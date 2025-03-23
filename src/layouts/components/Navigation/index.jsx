function Navigation() {
    return (
        <nav className="nav">
            <ul>
                {data.map((item) => (
                    <NavItem data={item} />
                ))}
            </ul>
        </nav>
    );
}
export default Navigation;
