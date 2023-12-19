export async function getMachines() {
    const res = await fetch('http://localhost:4000/api/equipment')
    const data = res.json()
    if (!res.ok) {
        throw {
            message: res.message,
            status: res.status,
            statusText: res.statusText
        }
    }
    return data
}

export async function getMachine(id) {
    const res = await fetch(`http://localhost:4000/api/equipment/${id}`)
    const data = res.json()
    if (!res.ok) {
        throw {
            message: res.message,
            status: res.status,
            statusText: res.statusText
        }
    }
    return data
}

export async function getVendorMachines() {
    const res = await fetch('http://localhost:4000/api/vendorEquipment')
    const data = res.json()
    if (!res.ok) {
        throw {
            message: res.message,
            status: res.status,
            statusText: res.statusText
        }
    }
    return data
}