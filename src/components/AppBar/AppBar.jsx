import s from './AppBar.module.css'
import Dark from '../../additional/arrow/arrows'


export default function AppBar() {
    return(
        <header className={s.header}>
            <div className={s.header_content}>
                <div className={s.logopage}>
                    <a href="/goit-react-hw-05-movies/home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="173" height="51" fill="none"><rect width="173" height="51" fill="#EFEFEF" rx="15"/><path fill="#000" d="M54.266 34.115a1 1 0 0 1-.736-.299 1 1 0 0 1-.299-.736V19.004a1 1 0 0 1 .299-.736.965.965 0 0 1 .736-.322h8.947a.9.9 0 0 1 .69.299.9.9 0 0 1 .299.69.9.9 0 0 1-.299.69.936.936 0 0 1-.69.276h-7.889v5.083h7.084a.9.9 0 0 1 .69.299.9.9 0 0 1 .299.69.9.9 0 0 1-.299.69.936.936 0 0 1-.69.276h-7.084v6.141a.965.965 0 0 1-.322.736 1 1 0 0 1-.736.299Zm13.286-14.237a1.13 1.13 0 0 1-.828-.345 1.13 1.13 0 0 1-.345-.828v-.092c0-.322.115-.598.345-.828.23-.23.506-.345.828-.345h.138c.322 0 .598.115.828.345.23.23.345.506.345.828v.092c0 .322-.115.598-.345.828a1.13 1.13 0 0 1-.828.345h-.138Zm.046 14.237a1 1 0 0 1-.736-.299 1 1 0 0 1-.299-.736v-9.867a1 1 0 0 1 .3-.736.965.965 0 0 1 .735-.322c.307 0 .56.1.76.299.198.2.298.452.298.759v9.867a.965.965 0 0 1-.322.736 1 1 0 0 1-.736.299Zm5.728 0a1 1 0 0 1-.736-.299 1 1 0 0 1-.3-.736V18.153a1 1 0 0 1 .3-.736.965.965 0 0 1 .736-.322c.306 0 .56.1.759.299.199.2.299.452.299.759V33.08a.965.965 0 0 1-.322.736 1 1 0 0 1-.736.299Zm5.727 0a1 1 0 0 1-.736-.299 1 1 0 0 1-.299-.736v-9.867a1 1 0 0 1 .3-.736.965.965 0 0 1 .735-.322c.291 0 .537.107.736.322.215.2.322.445.322.736v.943a5.8 5.8 0 0 1 1.541-1.518c.614-.399 1.403-.598 2.37-.598.858 0 1.594.23 2.207.69.614.46 1.05 1.02 1.311 1.679.95-1.58 2.361-2.369 4.232-2.369.859 0 1.572.215 2.14.644a3.81 3.81 0 0 1 1.287 1.656c.276.675.414 1.38.414 2.116v6.624a.965.965 0 0 1-.322.736 1 1 0 0 1-.736.299 1 1 0 0 1-.736-.299 1 1 0 0 1-.299-.736v-6.21c0-.997-.176-1.725-.529-2.185-.353-.475-.958-.713-1.817-.713-.782 0-1.434.207-1.955.621-.506.399-.958.928-1.357 1.587v6.9a.965.965 0 0 1-.322.736 1 1 0 0 1-.736.299 1 1 0 0 1-.736-.299 1 1 0 0 1-.299-.736v-6.21c0-.997-.176-1.725-.529-2.185-.352-.475-.958-.713-1.817-.713-.782 0-1.433.207-1.955.621-.506.399-.958.928-1.357 1.587v6.9a.965.965 0 0 1-.322.736 1 1 0 0 1-.736.299Zm25.253.115c-1.18 0-2.215-.253-3.105-.759a5.25 5.25 0 0 1-2.07-2.139c-.475-.935-.713-2.001-.713-3.197 0-1.196.238-2.254.713-3.174a5.216 5.216 0 0 1 2.07-2.162c.89-.506 1.925-.759 3.105-.759 1.166 0 2.193.253 3.082.759a5.207 5.207 0 0 1 2.07 2.162c.491.92.736 1.978.736 3.174s-.245 2.262-.736 3.197a5.241 5.241 0 0 1-2.07 2.139c-.889.506-1.916.759-3.082.759Zm0-1.909c.629 0 1.227-.146 1.794-.437.583-.291 1.058-.751 1.426-1.38.384-.629.575-1.426.575-2.392 0-.95-.191-1.74-.575-2.369-.368-.629-.843-1.081-1.426-1.357a3.873 3.873 0 0 0-1.794-.437c-.644 0-1.257.146-1.84.437-.567.276-1.035.728-1.403 1.357-.368.629-.552 1.418-.552 2.369 0 .966.184 1.763.552 2.392.368.629.836 1.089 1.403 1.38a4.063 4.063 0 0 0 1.84.437Zm12.777 1.909c-2.239 0-3.358-1.012-3.358-3.036v-7.13h-1.633a.487.487 0 0 1-.322-.115.486.486 0 0 1 .092-.713l3.128-3.059c.138-.138.268-.207.391-.207.122 0 .222.046.299.138.092.092.138.2.138.322v1.84h2.599c.26 0 .475.084.644.253a.875.875 0 0 1 .253.644c0 .245-.085.46-.253.644a.874.874 0 0 1-.644.253h-2.599v6.946c0 .598.138.981.414 1.15.291.153.651.23 1.081.23.306 0 .613-.046.92-.138l.184-.046c.076-.015.168-.023.276-.023.214 0 .406.084.575.253a.747.747 0 0 1 .253.575c0 .353-.177.621-.529.805a4.503 4.503 0 0 1-1.909.414Zm9.821 0c-1.871 0-3.335-.529-4.393-1.587-1.043-1.073-1.564-2.576-1.564-4.508 0-1.089.199-2.093.598-3.013a5.117 5.117 0 0 1 1.84-2.231c.828-.567 1.847-.851 3.059-.851 1.134 0 2.116.268 2.944.805a5.043 5.043 0 0 1 1.886 2.116c.429.874.644 1.832.644 2.875 0 .291-.1.537-.299.736-.184.2-.437.299-.759.299h-7.797c.122 1.073.521 1.909 1.196 2.507.674.598 1.617.897 2.829.897.644 0 1.203-.061 1.679-.184.49-.123.966-.299 1.426-.529a.91.91 0 0 1 .414-.092c.245 0 .46.084.644.253a.835.835 0 0 1 .276.644c0 .337-.2.621-.598.851a8.344 8.344 0 0 1-1.771.759c-.583.169-1.334.253-2.254.253Zm2.944-7.061c-.046-.751-.246-1.38-.598-1.886-.338-.506-.759-.874-1.265-1.104a3.5 3.5 0 0 0-1.541-.368c-.522 0-1.035.123-1.541.368-.506.23-.928.598-1.265 1.104-.338.506-.529 1.135-.575 1.886h6.785Zm5.874 6.946a1 1 0 0 1-.736-.299 1.002 1.002 0 0 1-.299-.736V18.153c0-.291.1-.537.299-.736a.965.965 0 0 1 .736-.322c.291 0 .537.107.736.322.215.2.322.445.322.736v9.407l5.474-5.06c.23-.2.46-.299.69-.299.353 0 .606.1.759.299.169.2.253.437.253.713 0 .26-.13.521-.391.782l-3.312 2.967 4.163 5.52c.153.2.23.406.23.621 0 .307-.1.552-.299.736-.199.184-.452.276-.759.276a1.02 1.02 0 0 1-.46-.115 1.131 1.131 0 0 1-.391-.322l-3.956-5.382-2.001 1.817v2.967a.964.964 0 0 1-.322.736 1 1 0 0 1-.736.299Zm14.264.115a4.346 4.346 0 0 1-1.886-.414 3.302 3.302 0 0 1-1.357-1.196c-.338-.537-.506-1.15-.506-1.84 0-1.135.444-2.04 1.334-2.714.904-.675 2.223-1.012 3.956-1.012h2.783v-.184c0-1.012-.253-1.74-.759-2.185-.491-.445-1.265-.667-2.323-.667-.583 0-1.104.046-1.564.138-.445.092-.943.23-1.495.414-.123.03-.223.046-.299.046a.816.816 0 0 1-.598-.253.843.843 0 0 1-.253-.621c0-.414.199-.705.598-.874a10.113 10.113 0 0 1 3.979-.828c1.058 0 1.947.215 2.668.644.736.43 1.272.989 1.61 1.679.352.675.529 1.41.529 2.208v6.509a.967.967 0 0 1-.322.736c-.2.2-.445.299-.736.299a.999.999 0 0 1-.736-.299.998.998 0 0 1-.299-.736v-.598c-1.135 1.165-2.576 1.748-4.324 1.748Zm.782-1.84a4.24 4.24 0 0 0 1.955-.483 5.617 5.617 0 0 0 1.587-1.242v-1.932h-2.507c-2.316 0-3.473.606-3.473 1.817 0 .552.184.997.552 1.334.383.337 1.012.506 1.886.506ZM14 15.5V36c0 1 1 2 1.651 2h23.005c1 0 1.812-.72 1.812-1.72V16.01c0-1.01-.7-1.998-1.812-1.998-10.82 0-22.414-.076-23.156-.012-.742.064-1.5.5-1.5 1.5Zm5.438 20.501h-3.172c-.328-.014-.444-.103-.453-.5v-3.498h3.624v3.998Zm0-7.996h-3.625v-3.998h3.624v3.998Zm0-7.996h-3.625v-3.498c-.022-.414.072-.53.453-.5h3.172v3.998Zm13.327 15.492c-.453.5-1.172.5-1.172.5h-8.984s-.453 0-.906-.5-.453-1-.453-1V18.01s0-1 .453-1.5c.453-.499 1.36-.499 1.36-.499H31.5s.812 0 1.265.5c.453.5.453.856.453 1.499v16.492c0 .486 0 .5-.453 1Zm5.438.5H35.03v-3.998h3.625v3.498c0 .392-.09.51-.453.5Zm.453-7.996H35.03v-3.998h3.625v3.998Zm0-7.996H35.03v-3.998h3.172c.328.029.428.136.453.5v3.498Z"/><path fill="#000" d="M24 23.054s0-.372.182-.554c.183-.182.654 0 .654 0l5.727 3.054s.437.181.437.5-.438.5-.438.5l-5.726 3.054s-.499.168-.667 0C24 29.44 24 29.054 24 29.054v-6Z"/></svg>
                    </a>
                </div>

                <nav className={s.navpage}>
                <Dark/>
                    <a href="/goit-react-hw-05-movies/home">Home</a>
                    <a href="/goit-react-hw-05-movies/movie">Movie</a>
                </nav>
            </div>
        </header>

)

}
