import { useEffect, useState } from "react"
import api from '../../services/api.js'
import { Link } from "react-router-dom"

function ListarUsuarios() {

    const [ allUsers, setAllUsers ] = useState()

    useEffect(() => {

        async function loadUsers(){

            const token = localStorage.getItem('token')

            const {
                data: { users },
            } = await api.get('/listar-usuarios', {
                headers: { Authorization: `Bearer ${token}` }
            })

            setAllUsers(users)
        }

        loadUsers()

    }, [])

    return(

        
        

        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md shadow-md ">
            <Link to="/login" className="text-blue-700 hover:underline block">Sair</Link>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Listar de Usuários
            </h2>

            <ul className="space-y-2">
                {allUsers && allUsers.map(user => (
                    <li key={user.id} className="bg-gray-100 p-4 rounded-md">
                        <p className="font-semibold">ID: <span className="text-green-600">{user.id}</span></p>
                        <p className="font-semibold">Nome: <span className="text-violet-500">{user.name}</span></p>
                        <p className="font-semibold">E-mail: <span className="text-blue-600">{user.email}</span></p>
                    </li>
                    

                ) )}
                
            </ul>
        </div>
    )
}

export default ListarUsuarios