/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0.
 *
 * This file is generated
 */

/**
 * @packageDocumentation
 * @module aws-iot-device-sdk
 */

/**
 * @category IotJobs
 */
export enum RejectedErrorCode {
    UNKNOWN_ENUM_VALUE = "UNKNOWN_ENUM_VALUE",
    INVALID_TOPIC = "InvalidTopic",
    INVALID_STATE_TRANSITION = "InvalidStateTransition",
    RESOURCE_NOT_FOUND = "ResourceNotFound",
    INVALID_REQUEST = "InvalidRequest",
    REQUEST_THROTTLED = "RequestThrottled",
    INTERNAL_ERROR = "InternalError",
    TERMINAL_STATE_REACHED = "TerminalStateReached",
    INVALID_JSON = "InvalidJson",
    VERSION_MISMATCH = "VersionMismatch",
}

/**
 * @category IotJobs
 */
export enum JobStatus {
    UNKNOWN_ENUM_VALUE = "UNKNOWN_ENUM_VALUE",
    IN_PROGRESS = "IN_PROGRESS",
    FAILED = "FAILED",
    QUEUED = "QUEUED",
    TIMED_OUT = "TIMED_OUT",
    SUCCEEDED = "SUCCEEDED",
    CANCELED = "CANCELED",
    REJECTED = "REJECTED",
    REMOVED = "REMOVED",
}


/**
 * @category IotJobs
 */
export interface DescribeJobExecutionRequest {
    executionNumber?: number;
    thingName: string;
    includeJobDocument?: boolean;
    jobId: string;
    clientToken?: string;
}

/**
 * @category IotJobs
 */
export interface DescribeJobExecutionResponse {
    execution?: JobExecutionData;
    clientToken?: string;
    timestamp?: Date;
}

/**
 * @category IotJobs
 */
export interface DescribeJobExecutionSubscriptionRequest {
    thingName: string;
    jobId: string;
}

/**
 * @category IotJobs
 */
export interface GetPendingJobExecutionsRequest {
    thingName: string;
    clientToken?: string;
}

/**
 * @category IotJobs
 */
export interface GetPendingJobExecutionsResponse {
    queuedJobs?: Array<JobExecutionSummary>;
    timestamp?: Date;
    clientToken?: string;
    inProgressJobs?: Array<JobExecutionSummary>;
}

/**
 * @category IotJobs
 */
export interface GetPendingJobExecutionsSubscriptionRequest {
    thingName: string;
}

/**
 * @category IotJobs
 */
export interface JobExecutionData {
    jobId?: string;
    jobDocument?: object;
    status?: JobStatus;
    versionNumber?: number;
    queuedAt?: Date;
    thingName?: string;
    executionNumber?: number;
    statusDetails?: {[key: string]: string};
    lastUpdatedAt?: Date;
    startedAt?: Date;
}

/**
 * @category IotJobs
 */
export interface JobExecutionState {
    statusDetails?: {[key: string]: string};
    versionNumber?: number;
    status?: JobStatus;
}

/**
 * @category IotJobs
 */
export interface JobExecutionSummary {
    lastUpdatedAt?: Date;
    executionNumber?: number;
    startedAt?: Date;
    versionNumber?: number;
    jobId?: string;
    queuedAt?: Date;
}

/**
 * @category IotJobs
 */
export interface JobExecutionsChangedEvent {
    jobs?: {[key: string]: Array<JobExecutionSummary>};
    timestamp?: Date;
}

/**
 * @category IotJobs
 */
export interface JobExecutionsChangedSubscriptionRequest {
    thingName: string;
}

/**
 * @category IotJobs
 */
export interface NextJobExecutionChangedEvent {
    execution?: JobExecutionData;
    timestamp?: Date;
}

/**
 * @category IotJobs
 */
export interface NextJobExecutionChangedSubscriptionRequest {
    thingName: string;
}

/**
 * @category IotJobs
 */
export interface RejectedErrorResponse {
    timestamp?: Date;
    code?: RejectedErrorCode;
    message?: string;
    clientToken?: string;
    executionState?: JobExecutionState;
}

/**
 * @category IotJobs
 */
export interface StartNextJobExecutionResponse {
    clientToken?: string;
    timestamp?: Date;
    execution?: JobExecutionData;
}

/**
 * @category IotJobs
 */
export interface StartNextPendingJobExecutionRequest {
    thingName: string;
    stepTimeoutInMinutes?: number;
    clientToken?: string;
    statusDetails?: {[key: string]: string};
}

/**
 * @category IotJobs
 */
export interface StartNextPendingJobExecutionSubscriptionRequest {
    thingName: string;
}

/**
 * @category IotJobs
 */
export interface UpdateJobExecutionRequest {
    thingName: string;
    executionNumber?: number;
    statusDetails?: {[key: string]: string};
    includeJobExecutionState?: boolean;
    jobId: string;
    expectedVersion?: number;
    includeJobDocument?: boolean;
    status?: JobStatus;
    stepTimeoutInMinutes?: number;
    clientToken?: string;
}

/**
 * @category IotJobs
 */
export interface UpdateJobExecutionResponse {
    clientToken?: string;
    timestamp?: Date;
    jobDocument?: object;
    executionState?: JobExecutionState;
}

/**
 * @category IotJobs
 */
export interface UpdateJobExecutionSubscriptionRequest {
    jobId: string;
    thingName: string;
}

