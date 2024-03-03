<?php

namespace App\Models;

use Database\Factories\VideoFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

/**
 * App\Models\Video
 *
 * @property string $user_name
 * @property string $title
 * @property string|null $description
 * @property string $slug
 * @property int $views
 * @property string|null $thumbnail_image_url
 * @property string $data_url
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 * @property-read User $user
 * @method static VideoFactory factory($count = null, $state = [])
 * @method static Builder|Video newModelQuery()
 * @method static Builder|Video newQuery()
 * @method static Builder|Video query()
 * @method static Builder|Video whereCreatedAt($value)
 * @method static Builder|Video whereDataUrl($value)
 * @method static Builder|Video whereDeletedAt($value)
 * @method static Builder|Video whereDescription($value)
 * @method static Builder|Video whereThumbnailImageUrl($value)
 * @method static Builder|Video whereTitle($value)
 * @method static Builder|Video whereUpdatedAt($value)
 * @method static Builder|Video whereViews($value)
 * @method static Builder|Video whereSlug($value)
 * @method static Builder|Video whereUserName($value)
 * @mixin Builder
 */
class Video extends Model {
    use HasFactory;

    public function user(): BelongsTo {
        return $this->belongsTo(User::class, "user_name", "name");
    }

    public function fetch(string $username, string $slug): Model {
        return $this->where("user_name", $username)->where("slug", $slug)->with("user")->first();
    }

    public function fetchByAmount(int $amount, string $direction = "asc" | "desc"): Collection {
        return $this->orderBy("created_at", $direction)->limit($amount)->with("user")->get();
    }

    public function fetchAllByUsername(int $username, string $direction = "asc" | "desc"): Collection {
        return $this->where("user_name", $username)->orderBy("created_at", $direction)->with("user")->get();
    }
}
