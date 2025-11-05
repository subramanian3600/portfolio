export const environment = {
    years_of_experience: (() => {
        const startYear = 2021;
        const startMonth = 8; // September (0-based)
        const now = new Date();
        let years = now.getFullYear() - startYear;
        if (now.getMonth() < startMonth) years--;
        return years;
    })(),
    projects_worked: 15,
    linkedin_connections: 300
};