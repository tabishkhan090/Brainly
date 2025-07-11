export function getDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');     // ensures 2 digits
    const month = String(today.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const year = today.getFullYear();
    
    return `${day}/${month}/${year}`;
}