/**
 * @file Service to fetch data from the backend
 * @function getDatasEmployees
 */
export const getDatasEmployees = async() => {
    try {
        const fetchEmployees = await fetch('/employeesDatas.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        const employeesFromBackEnd = await fetchEmployees.json()
        return employeesFromBackEnd
    } catch (error) {
        throw error
    }
}