import { View, Text, Image, Pressable } from "react-native";
import { Post } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { Heart, MessageCircle, Share, Repeat } from "lucide-react-native";

export default function PostListItem({ post }: { post: Post }) {
  return (
    <View className="flex-row px-4 py-3 border-b border-neutral-800/70">
      {/* User Avatar */}
      <Image
        source={{ uri: post.user.image }}
        className="w-12 h-12 rounded-full mr-3"
      />

      {/* Right Side */}
      <View className="flex-1">
        {/* User Info Row */}
        <View className="flex-row items-center">
          <Text className="text-white font-semibold mr-1">{post.user.name}</Text>
          <Text className="text-neutral-400">@{post.user.username}</Text>
          <Text className="text-neutral-500 mx-1">·</Text>
          <Text className="text-neutral-500">
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </Text>
        </View>

        {/* Post Content */}
        <Text className="text-white text-base mt-1">{post.content}</Text>

        {/* Action Row */}
        <View className="flex-row mt-3 justify-between pr-8">
          {/* Like */}
          <Pressable className="flex-row items-center">
            <Heart size={18} color="gray" />
          </Pressable>

          {/* Comment */}
          <Pressable className="flex-row items-center">
            <MessageCircle size={18} color="gray" />
            <Text className="text-neutral-400 text-sm ml-1">
              {post.replies?.length || 0}
            </Text>
          </Pressable>

          {/* Repost */}
          <Pressable className="flex-row items-center">
            <Repeat size={18} color="gray" />
          </Pressable>

          {/* Share */}
          <Pressable className="flex-row items-center">
            <Share size={18} color="gray" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
