export function makeIdGenerator(): () => number {
    let lastId = 0;

    return () => {
        lastId += 1;

        return lastId;
    };
}

export function nameToSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]/, '-')
        .replace(/-+/, '-');
}

export function formatDate(date: Date | undefined) {
    if (!date) return '';
    const dateObject = new Date(date);
    const dateString = `${dateObject.getDate()}/${
        dateObject.getMonth() + 1
    }/${dateObject.getFullYear()}`;
    return dateString;
}
