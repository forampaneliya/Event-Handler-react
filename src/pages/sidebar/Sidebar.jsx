import "./Sidebar.css"

function Sidebar() {
    return (
        <>
            <div className="sidebar-main">
                <div className="sidebar-img">
                    <img src="./1.png" alt="" height={500} width={800} />
                </div>
                <div className="sidebar-content">
                    <h1 className="sidebar-middle">
                        Recipe App with ReactJs
                    </h1>
                    <p className="heading-sec">Build and Deploy</p>

                    
                    <h2 className="content-end">
                        ...from scratch
                    </h2>
                </div>

            </div>


        </>
    )
}
export default Sidebar;