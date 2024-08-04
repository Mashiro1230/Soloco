from pydantic import BaseModel, Field


class ActivityCategoryResponse(BaseModel):
    subcategory: str = Field(examples=["リムジン"])
    image: bytes
    provider_name: str = Field(examples=["OneRide Limousine"])
    time_zone: str = Field(examples=["夜"])
    solo_level: str = Field(examples=["上級"])
    likes_count: int = Field(examples=[10])
    favorites_count: int = Field(examples=[20])


class ActivityResponse(BaseModel):
    provider_name: str = Field(examples=["OneRide Limousine"])
    image_large: bytes
    title: str = Field(examples=["ソロリムジンといえばここ！特別な日のご褒美に"])
    discription: str = Field(
        examples=[
            "自由が丘駅から徒歩1分に位置する「OneRide Limousine」。豪華なレザーシートでくつろぎ、最新のエンタメを満喫しながら、まるで映画の主人公に。お一人さま専用のリムジンで、ちょっとしたセレブ気分を味わってください。特別な時間を「OneRide Limousine」でどうぞ！"
        ]
    )
    plan_name: str = Field(
        examples=[
            "【新宿ALTA発】東京の夜景を独り占め！ソロリムジンプラン（ドレスコード付き）"
        ]
    )
    price: int = Field(examples=[25000])
    image_small: bytes
    coupon_discount_rate: int = Field(examples=[10])
    url: str = Field(examples=["https://lalalimousine.com/"])