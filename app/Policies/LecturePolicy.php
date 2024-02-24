<?php

namespace App\Policies;

use App\Models\Lecture;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class LecturePolicy {

    /**
     * Determine whether the user can view any models.
     * FIXME
     */
    public function viewAny(User $user): bool {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     * FIXME
     *
     * @param User $user
     * @param Lecture $lecture
     * @return Response
     */
    public function view(User $user, Lecture $lecture): Response {
        // TODO Should use is_published instead of deleted_at
        return $lecture->deleted_at === null ? Response::allow() : Response::deny();
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return Response
     */
    public function create(User $user): Response {
        return Response::allow();
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Lecture $lecture
     * @return Response
     */
    public function update(User $user, Lecture $lecture): Response {
        return $lecture->user_id === $user->id ? Response::allow() : Response::deny();
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Lecture $lecture
     * @return Response
     */
    public function delete(User $user, Lecture $lecture): Response {
        return $lecture->user_id === $user->id ? Response::allow() : Response::deny();
    }

    /**
     * Determine whether the user can restore the model.
     *
     * FIXME
     */
    public function restore(User $user, Lecture $lecture): bool {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Lecture $lecture
     * @return Response
     */
    public function forceDelete(User $user, Lecture $lecture): Response {
        return $lecture->user_id === $user->id ? Response::allow() : Response::deny();
    }
}
