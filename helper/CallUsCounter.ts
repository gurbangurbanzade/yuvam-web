import { api } from "@/api.config"
import axios from "axios";

export const callUsCounter = async () => {
    try {
        const respIP = await axios.get('https://api.ipify.org/');
        const resp = await api.post('call-us', {
            identifier: respIP.data
        })

        return resp
    } catch (error) {
    }
}