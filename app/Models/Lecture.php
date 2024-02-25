<?php

namespace App\Models;

use Database\Factories\LectureFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

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

    public function getByAmount(int $amount): Collection {
        return $this->latest()->limit($amount)->get();
    }
}
