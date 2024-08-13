
import bb_app from "../assets/bb_app.jpg"
import dij from "../assets/dij.jpg"
import note_app from "../assets/note_app.jpg"
import recipe_app from "../assets/recipe_app.jpg"
import sketcher_app from "../assets/sketcher_app.jpg"
import takecare_app from "../assets/takecare_app.jpg"
import weather_app from "../assets/weather_app.jpg"
import y_chat_app from "../assets/y_chat_app.jpg"
import WorkTile from "../widgets/Work_Tile.jsx"



function Work() {
    const items = [
        {   key:199,
            title: "Jhumo app",
            description: "Jhumo is a music collaboration app that allows users to play music simultaneously with friends. This app features a unique collaboration page where users can share or enter codes to sync their songs with others.",
            URL: "https://github.com/yagnesh0312/jhumo",
            image: "https://raw.githubusercontent.com/yagnesh0312/jhumo/master/image/i3.png"
        },
        {   key:18,
            title: "TakeCare app",
            description: "TakeCare is a mobile application developed using Flutter, designed to simplify the process of booking appointments at clinics across India. With TakeCare, users can easily find and schedule appointments with healthcare providers, making it convenient to access medical services on the go.",
            URL: "https://github.com/yagnesh0312/takecare-present/tree/master",
            image: takecare_app
        },
        {   key:65,
            title: "BillBox app",
            description: "BillBox is an innovative billing system designed to streamline the process of generating and managing bills for small-scale businesses. With its intuitive Android and desktop applications, BillBox offers users a convenient platform to create, view, and organize online bills effortlessly.",
            URL: "https://github.com/yagnesh0312/#bb",
            image: bb_app
        }
        ,
        {   key:57,
            title: "Dijkstra Visualizer",
            description: "Dijkstra's algorithm efficiently finds the shortest path from a source node to all other nodes in a graph with non-negative edge weights, using a priority queue to greedily select the next node with the smallest tentative distance. It terminates when all nodes have been visited, providing the shortest paths and distances.",
            URL: "https://github.com/yagnesh0312/find_shortest_path_flutter",
            image: dij
        },
        {
            title: "Note app",
            description: "A Flutter application for creating and managing notes with a beautiful user interface.",
            URL: "https://github.com/yagnesh0312/notebook",
            image: note_app
        },
        {   key:37,
            title: "Recipe app",
            description: "This Flutter application provides a beautiful and user-friendly interface for discovering and exploring recipes from around the world. It leverages the free API from TheMealDB.com to fetch a vast collection of recipes and displays them with stunning animations.",
            URL: "https://github.com/yagnesh0312/recipe_app",
            image: recipe_app
        },
        {   key:69,
            title: "Sketcher app",
            description: "Hello from Collaborative Paint, an innovative platform that changes the way we work together on artwork. This app promotes creativity and collaboration by enabling multiple people to collaborate in real-time on one online canvas.",
            URL: "https://github.com/yagnesh0312/sketcher",
            image: sketcher_app
        },
        {   key:73,
            title: "Weather app",
            description: "Hello from Collaborative Paint, an innovative platform that changes the way we work together on artwork. This app promotes creativity and collaboration by enabling multiple people to collaborate in real-time on one online canvas.",
            URL: "https://github.com/yagnesh0312/weatherapp",
            image: weather_app
        },
        {   key:61,
            title: "Y Chat app",
            description: "Are you tired of cumbersome messaging apps that clutter your screen and complicate your conversations? Say hello to Y Chat, where simplicity meets sophistication, revolutionizing the way you connect with your friends, family, and colleagues.",
            URL: "https://github.com/yagnesh0312/y-chat",
            image: y_chat_app
        }
    ]
    return (<>

        <div className="main-body head">
            <div className="heading">Latest work</div>
            <div className="sub-heading">These are altogether my own creations.</div>
            <div className="work-main">
                {
                    items.map(item => (
                        <WorkTile key={item.key} item={item} />
                    ))
                }

            </div>

        </div>
    </>);
}
export default Work