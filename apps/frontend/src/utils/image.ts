const S3_BASE_URL = `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_REGION}.amazonaws.com/`;

export const getImageUrl = (image: string) => {
    if (image.startsWith("http")) {
        // 完全なURLの時はそのまま返す
        return image;
    } else {
        // ファイル名のみの場合はS3のURLを作成
        return `${S3_BASE_URL}${image}`;
    }
};
