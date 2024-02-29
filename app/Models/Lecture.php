<?php

namespace App\Models;

use Database\Factories\LectureFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

// FIXME: timestamp === Carbon ??? IDK

/**
 * App\Models\Lecture
 *
 * @property integer id
 * @property integer user_id
 * @property string title
 * @property string description
 * @property integer view_count
 * @property string thumbnail_image_url
 * @property string data_file_url
 * @property Carbon created_at
 * @property Carbon updated_at
 * @property Carbon deleted_at
 * @method static LectureFactory factory($count = null, $state = [])
 * @method static Builder|Lecture newModelQuery()
 * @method static Builder|Lecture newQuery()
 * @method static Builder|Lecture query()
 * @method static Builder|Lecture whereCreatedAt($value)
 * @method static Builder|Lecture whereDataFileUrl($value)
 * @method static Builder|Lecture whereDeletedAt($value)
 * @method static Builder|Lecture whereDescription($value)
 * @method static Builder|Lecture whereId($value)
 * @method static Builder|Lecture whereThumbnailImageUrl($value)
 * @method static Builder|Lecture whereTitle($value)
 * @method static Builder|Lecture whereUpdatedAt($value)
 * @method static Builder|Lecture whereUserId($value)
 * @method static Builder|Lecture whereViewCount($value)
 * @mixin Builder
 */
class Lecture extends Model {

    use HasFactory;

    public function user(): BelongsTo {
        return $this->belongsTo(User::class, "user_id", "id");
    }

    public function getByAmount(int $amount = 10): Collection {
        return DB::table("lectures")
            ->join("users", "lectures.user_id", "=", "users.id")
            ->select("lectures.id as lecture_id", "title as lecture_title", "description as lecture_description", "view_count as lecture_view_count", "thumbnail_image_url as lecture_thumbnail_image_url", "data_file_url as lecture_data_file_url")
            ->addSelect("user_id", "name as user_name", "image_url as user_image_url")
            ->addSelect("lectures.created_at", "lectures.updated_at", "lectures.deleted_at")
            ->limit($amount)
            ->get();
    }

    public function getById(int $userId, int $lectureId): Collection {
        return DB::table("lectures")
            ->join("users", "lectures.user_id", "=", "users.id")
            ->where("user_id", "=", $userId)
            ->where("lectures.id", "=", $lectureId)
            ->select("lectures.id as lecture_id", "title as lecture_title", "description as lecture_description", "view_count as lecture_view_count", "thumbnail_image_url as lecture_thumbnail_image_url", "data_file_url as lecture_data_file_url")
            ->addSelect("user_id", "name as user_name", "image_url as user_image_url")
            ->addSelect("lectures.created_at", "lectures.updated_at", "lectures.deleted_at")
            ->get();
    }
}
