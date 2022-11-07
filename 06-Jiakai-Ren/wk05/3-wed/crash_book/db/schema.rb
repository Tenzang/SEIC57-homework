# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_26_050433) do

  create_table "airlines", force: :cascade do |t|
    t.text "name"
    t.text "code"
    t.text "country"
    t.integer "fleet"
    t.text "logo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "incidents", force: :cascade do |t|
    t.integer "flight_number"
    t.date "date"
    t.text "description"
    t.text "image"
    t.integer "death"
    t.integer "injury"
    t.integer "survival"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "airline_id"
  end

end
