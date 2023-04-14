export const formDate = (date: string | Date, day = true) =>
    new Date(date).toLocaleDateString('en-US', {
        day: day ? 'numeric' : undefined,
        month: 'long',
        year: 'numeric',
    });

export const formAddressText = (address: string) => address.replace(', ', '\n');
